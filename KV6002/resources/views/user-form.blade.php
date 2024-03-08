<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>User Form</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">  
  <link href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap5.min.css">
  </head>
<body>
<div class="container">
  <br /><br />
    
  @if($id)
      {{ Form::open(['url'=> route('users.update', ['user'=>$id]), 'method' => 'PUT']) }}
      <h2>Edit User</h2>
  @else
      {{ Form::open(['url'=> route('users.store')]) }}
      <h2>Add User</h2>
  @endif
  <br /><br />
  <div class="table-responsive text-nowrap">
    <table class="table table-bordered">
        <tbody>
            <tr>
                <td>First Name</td>
                <td>{{ Form::text('first_name', $id ? $user['first_name'] : null, ['class' => 'form-control', 'autocomplete' => 'off']) }}</td>
            </tr>
            <tr>
                <td>Last Name</td>
                <td>{{ Form::text('last_name', $id ? $user['last_name'] : null, ['class' => 'form-control', 'autocomplete' => 'off']) }}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{{ Form::text('email', $id ? $user['email'] : null, ['class' => 'form-control', 'autocomplete' => 'off']) }}</td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>{{ Form::text('phone', $id ? $user['phone'] : null, ['class' => 'form-control', 'autocomplete' => 'off']) }}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>{{ Form::text('country', $id ? $user['country'] : null, ['class' => 'form-control', 'autocomplete' => 'off']) }}</td>
            </tr>
        </tbody>
    </table>

    <button type="submit" class="btn btn-success btn-sm btn-rouneded">Save</button>
    <a href="{{ route('users.index') }}" class="btn btn-danger btn-sm btn-rounded">Back</a>

    {{ Form::close() }}
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
</body>
</html>